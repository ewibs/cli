import { Assembly } from '@ewibs/assembly';
import { IComponent } from '@ewibs/assembly/models/component';
import * as tsNode from 'ts-node';

export class CLIAssembly extends Assembly {

  async removeModuleFromCache(file: string): Promise<void> {
    // throw new Error('Method not implemented.');
  }

  async import(file: string): Promise<IComponent> {
    // return await (Function(`return import("${file}")`)() as Promise<IComponent>);
    tsNode.register();
    return await import(file);
  }
  
}