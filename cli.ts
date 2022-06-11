#!/usr/bin/env node

import path from 'path';
import { first } from 'rxjs';

import { CLIAssembly } from './assembly';

async function LoadAssembly(packagePath: string) {
  const assembly = new CLIAssembly(packagePath);
  
  await new Promise((finish) => assembly.$load.pipe(first()).subscribe(() => {
  
    assembly.bundle?.export();

    finish(null);
  
  }));

  console.log('done')

  return

}

LoadAssembly(path.resolve(process.cwd(), process.argv[2]));