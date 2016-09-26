Instructions:

#put these files in the \webapp folder and execute
npm install

# Open system.js.config.js and add the following line
System.config({
  packages: [
    'angular2-datatable': { defaultExtension: 'js' },
    ...
  ]
});

#Update packages
npm update

# Transpile code
npm start


