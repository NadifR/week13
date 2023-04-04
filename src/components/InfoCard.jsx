import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link, generatePath } from "react-router-dom";

function InfoCard(props) {
  const { id, title, author, publisher, Image } = props;
  return (
    <Link to={generatePath(PATH.detail, {id})}>
    <Card maxW="sm">
      <CardBody>
        <Image
          src={`${API_URL}/${Image}`}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{author}</Text>
          <Text>{publisher}</Text>
        </Stack>
      </CardBody>
    </Card>
    </Link>
  );
}

export default InfoCard;
