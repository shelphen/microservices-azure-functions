import { firebaseAzureFunction } from './main';
import { auth0AuthenticationHook } from '../lib/auth';
import { wrapper } from '../lib/utils';


export default auth0AuthenticationHook(firebaseAzureFunction);
// export default firebaseAzureFunction;
