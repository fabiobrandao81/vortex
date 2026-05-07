export const Camera = {
  requestCameraPermission: jest.fn().mockResolvedValue('authorized'),
  getCameraPermissionStatus: jest.fn().mockResolvedValue('authorized'),
};

export const useCameraDevices = jest.fn().mockReturnValue([
  {id: 'mock-back', position: 'back'},
  {id: 'mock-front', position: 'front'},
]);