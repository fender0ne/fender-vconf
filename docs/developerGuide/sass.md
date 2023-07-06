# [`SASS`](https://sass-lang.com/install) - The Dart SASS transpiler

## `Install SASS`

:eye_speech_bubble:
If you use [the Chocolatey package manager](https://chocolatey.org/) for Windows, you can install Dart Sass by running:

```powershell
choco install sass
```

> And do not worry about the Path!

Or you can do a **standalone installation** of the Dart SASS transpiler on Windows as follows:

> 1. Download the latest version of the Dart SASS transpiler from [here](https://github.com/sass/dart-sass#standalone)
> 2. Unzip the file and copy the folder to a location of your choice.
> 3. Add the path to the folder to the PATH environment variable.

## `Run SASS`

To run the SASS transpiler from the command line, you can use the following command:

```powershell
sass --watch --no-source-map .\css\style.scss .\css\style.scss.css
```
