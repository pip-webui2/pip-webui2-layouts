import * as _ from 'lodash';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';
import { PIP_BREAKPOINTS } from './pip-webui2-layouts';

let CUSTOM_BREAKPOINTS = _.defaultsDeep(PIP_BREAKPOINTS, DEFAULT_BREAKPOINTS);

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINTS,
  useValue: [...PIP_BREAKPOINTS]
};