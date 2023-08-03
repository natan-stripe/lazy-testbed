import _ from 'lodash';

export default () => {
    console.log('Dependency 1');
    _.each([1, 1, 1], console.log);
}