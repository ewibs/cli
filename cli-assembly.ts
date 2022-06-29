import { Assembly } from '@ewibs/assembly';
import { AssemblyMode } from '@ewibs/assembly/models/assembly';
import { IComponent } from '@ewibs/assembly/models/component';
import * as tsNode from 'ts-node';

export class CLIAssembly extends Assembly {

  constructor(assemblySettingsPath: string, public readonly mode = AssemblyMode.prod) {
    super(assemblySettingsPath);
  }

  async removeModuleFromCache(file: string): Promise<void> {
    delete require.cache[file];
  }

  async import(file: string): Promise<IComponent> {
    // return await (Function(`return import("${file}")`)() as Promise<IComponent>);
    tsNode.register();
    return await import(file);
  }
  
}