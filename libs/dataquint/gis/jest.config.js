module.exports = {
  name: 'dataquint-gis',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/dataquint/gis',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
