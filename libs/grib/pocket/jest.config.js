module.exports = {
  name: 'grib-pocket',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/grib/pocket',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
