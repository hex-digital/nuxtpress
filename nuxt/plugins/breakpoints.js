import Vue from 'vue';
import { availableBreakpoints } from '~/utilities/frameworkSetup';

class Breakpoints {
  mq({ from = null, until = null }, currentScreenSize = null) {
    const currentBreakpointIndex = availableBreakpoints.indexOf(currentScreenSize);

    if (from !== '' && from !== null) {
      const fromBreakpointIndex = availableBreakpoints.indexOf(from);
      if (fromBreakpointIndex > currentBreakpointIndex) {
        return false;
      }
    }

    if (until !== '' && until !== null) {
      const untilBreakpointIndex = availableBreakpoints.indexOf(until);
      if (untilBreakpointIndex <= currentBreakpointIndex) {
        return false;
      }
    }

    return true;
  }

  /**
   * Add common helper functions here, such as palmOnly, or deviceUp etc.
   * E.G:
   *   palmOnly(screenSize) {
   *     return mq({ until: breakpoints.DEVICE }, screenSize);
   *   }
   */
}

Vue.prototype.$breakpoints = new Breakpoints();
