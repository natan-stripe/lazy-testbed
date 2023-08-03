import _ from 'lodash';

export default () => {
    console.log('Dependency 2');
    _.each([2, 2, 2], console.log);
}