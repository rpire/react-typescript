import * as ReactDom from 'react-dom';
import List from '../../components/List';

describe('List component tests', () => {
  let container: HTMLDivElement;

  const arr: string[] = ['foo', 'boo', 'loo', 'goo', 'zoo'];

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    ReactDom.render(<List arr={arr} />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('renders every element in "arr"', () => {
    const listItems = container.querySelectorAll('li');

    expect(listItems).toHaveLength(arr.length);
    expect(listItems[0]).toContainHTML('foo');
    expect(listItems[2]).toContainHTML('loo');
    expect(listItems[4]).toContainHTML('zoo');
  });
});
