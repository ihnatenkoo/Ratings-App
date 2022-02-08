import { Htag } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';

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
      <Paragraph>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и
        soft skills — навыки, которые позволят эффективно взаимодействовать в команде с
        менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно
        конкурировать с веб-дизайнерами уровня middle.
      </Paragraph>
    </>
  );
}
