module.exports = {
  name: 'app-grib-online',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-grib-online',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
