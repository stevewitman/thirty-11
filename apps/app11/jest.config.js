module.exports = {
  name: 'app11',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app11',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
