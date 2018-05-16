import { Project } from '../';

describe('@ionic/cli-utils', () => {

  describe('lib/project/angular', () => {

    describe('Project', () => {

      it('should set directory attribute', async () => {
        const p = new Project('/path/to/proj', 'file', {});
        expect(p.directory).toEqual('/path/to/proj');
      });

      describe('getSourceDir', () => {

        it('should default to src', async () => {
          const p = new Project('/path/to/proj', 'file', {});
          const result = await p.getSourceDir();
          expect(result).toEqual('/path/to/proj/src');
        });

        it('should should set the src root relative to the project root', async () => {
          const sourceRoot = 'relative/path/to/src';
          const p = new Project('/path/to/proj', 'file', {});
          const result = await p.getSourceDir(sourceRoot);
          expect(result).toEqual(`/path/to/proj/${sourceRoot}`);
        });

      });

    });

  });

});
