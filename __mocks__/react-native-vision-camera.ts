export const Camera = {
  requestCameraPermission: jest.fn().mockResolvedValue('granted'),
  getCameraPermissionStatus: jest.fn().mockResolvedValue('granted'),
};

export const useCameraDevice = jest.fn().mockReturnValue({
  position: 'back',
});

export const useCameraPermission = jest.fn().mockReturnValue({
  hasPermission: true,
  requestPermission: jest.fn().mockResolvedValue(true),
});