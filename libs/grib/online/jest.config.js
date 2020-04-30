module.exports = {
  name: 'grib-online',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/grib/online',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
