import { styled } from 'styled-components';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'property-information';

interface MarkdownProps {
  content: string;
}

export default function Markdown({
  content,
} : MarkdownProps) {
  return (
    <Container className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  padding-block: 2rem;
  
  ul {
    padding-left: 2rem;
  }
  
  li {
    list-style: circle;
  }
`;
