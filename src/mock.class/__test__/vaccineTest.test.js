import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";
import Recipient from "../recipient";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  const theMockOfClass = jest.fn().mockImplementation(() => {
    const returnValue = {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
    return returnValue;
  });
  return theMockOfClass;
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccinTest = new VaccineTest();
    vaccinTest.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    mockGetHasAntibodies.mockReturnValue(true);
    const vaccinTest = new VaccineTest();
    const res = vaccinTest.test();
    expect(res).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies.mockReturnValue(false);
    const vaccinTest = new VaccineTest();
    const res = vaccinTest.test();
    expect(res).toEqual("Vaccine Test Failed");
  });
});
