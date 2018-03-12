import * as _ from 'lodash';
import {BREAKPOINTS} from '@angular/flex-layout';
import { PIP_BREAKPOINTS } from './pip-webui2-layouts';

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINTS,
  useValue: [...PIP_BREAKPOINTS]
};