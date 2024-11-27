# Path Modules - NodeJS
In Node.sj, the ```path module``` provides utilities for working with file and directory oaths. It's a built-in module, so you don't need to install any external packages to use it.

### Special Node.js Constant

**_filename**

- Provides the absolute path of the currently executing file.

**_dirname**

- Provides the absolute directory path of the currently executing file.

**Note ,These are only available in commonjs.*

## *Path Module Features

`path.parse():` Returns an object with details about a given path, including root, dir, base, ext and name.

`path.join():` Joins multiple path segment into one, using the appropriate separator (\on Windows, / on LInux.macOS).

`path.resolve():` Resolve a sequence of paths into an absolute path, starting from the current directory.

`path.extname():` Extracts the file extension form a given path.

`path.basename():` Returns the last part of a path (e.g., file name with extension).

`path.dirname():` Return the directory part of a path.

path.sep: Return the platform-specific path segment separator (\ for Windows / for Linux/macOS).

