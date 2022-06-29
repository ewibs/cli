#!/usr/bin/env node
import path from 'path';

import { CLIAssembly } from './cli-assembly';

async function LoadAssembly(packagePath: string) {
  const assembly = new CLIAssembly(packagePath);
  const bundle = await assembly.getBundlePromise();
  bundle.export();
  console.log('Finished exporting')
  process.exit();
}

async function WatchAssembly(packagePath: string) {
  const assembly = new CLIAssembly(packagePath);

  assembly.$load.subscribe(() => {
    assembly.bundle?.export();
    // assembly.save();
  });
}

switch (process.argv[2]) {
  case 'watch':
    WatchAssembly(path.resolve(process.cwd(), process.argv[3]));
    break;
  default:
    LoadAssembly(path.resolve(process.cwd(), process.argv[2]));
    break;
}
