#!/usr/bin/env node

import path from 'path';
import { first } from 'rxjs';

import { CLIAssembly } from './assembly';

async function LoadAssembly(packagePath: string) {
  const assembly = new CLIAssembly(packagePath);

  const bundle = await assembly.getBundlePromise();
  
  bundle.export();

}

LoadAssembly(path.resolve(process.cwd(), process.argv[2]));