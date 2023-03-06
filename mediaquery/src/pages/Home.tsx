import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div>
      <PC>{isPC && <p>Hi Pc</p>}</PC>
      <Tablet>{isTablet && <p>Hi Tablet</p>}</Tablet>
      <Mobile>{isMobile && <p>Hi Mobile</p>}</Mobile>
    </div>
  );
};

export default Home;

const PC = styled.div`
  background-color: #a0a0ee;
`;

const Tablet = styled.div`
  background-color: #8af1ec86;
`;
const Mobile = styled.div`
  background-color: #f0e89f;
`;
