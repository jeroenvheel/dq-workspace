module.exports = {
  name: 'app-gv-online',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-gv-online',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
