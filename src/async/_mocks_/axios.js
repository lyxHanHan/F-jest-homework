export default {
  get: jest.fn(() => Promise.resolve({ data: "Hanhan" })),
  post: jest.fn(() => Promise.resolve({ data: "Hanhan" })),
};
