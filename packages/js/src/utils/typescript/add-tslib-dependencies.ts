import { addDependenciesToPackageJson, Tree } from '@nx/devkit';
import { tsLibVersion } from '../versions';

export function addTsLibDependencies(tree: Tree) {
  addDependenciesToPackageJson(
    tree,
    {
      tslib: tsLibVersion,
    },
    {}
  );
}
