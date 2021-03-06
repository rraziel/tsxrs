import {ParameterType} from '../ParameterType';
import {ClassConstructor} from 'es-decorator-utils';

/**
 * Operation parameter information
 */
interface OperationParameterInfo {
    name?: string|ClassConstructor<any>;
    class: Function;
    type: ParameterType;
}

export {
    OperationParameterInfo
};
