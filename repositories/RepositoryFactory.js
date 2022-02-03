import projectRepository from "./projectRepository.js";
import teamRepository from "./teamRepository.js";
import testcaseRepository from "./testcaseRepository.js";
import testsuiteRepository from "./testsuiteRepository.js";
import userRepository from "./userRepository.js";
import authRepository from "./authRepository.js";
import contactRepository from "./contactRepository.js";
import paymentRepository from "./paymentRepository.js";

const repositories = {
  project: projectRepository,
  team: teamRepository,
  testcase: testcaseRepository,
  testsuite: testsuiteRepository,
  user: userRepository,
  auth: authRepository,
  contact: contactRepository,
  payment: paymentRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
