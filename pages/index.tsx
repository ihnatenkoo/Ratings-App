import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">First Page</Htag>
      <Button appereance="primary" arrow="right">
        Узнать побробнее
      </Button>
      <Button appereance="ghost" arrow="right">
        Узнать побробнее
      </Button>
    </>
  );
}
