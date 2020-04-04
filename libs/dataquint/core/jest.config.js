module.exports = {
  name: 'dataquint-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/dataquint/core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
