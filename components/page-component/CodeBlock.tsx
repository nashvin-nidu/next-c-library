import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prettier from 'prettier/standalone';
import parserTypescript from 'prettier/parser-typescript';
import parserEstree from 'prettier/plugins/estree';

const formatTsx = (code: string) => {
    try {
        return prettier.format(code, {
            parser: 'typescript',
            plugins: [parserTypescript, parserEstree],
            semi: true,
            singleQuote: true,
            tabWidth: 2,
        });
    } catch (error) {
        console.warn('Failed to format code:', error);
        return code;
    }
};

const CodeBlock = async ({language = "tsx", code}: {language: string, code: string}) => {
    const formattedCode =  await formatTsx(code);
 
    return (
        <SyntaxHighlighter 
        language={language}
        style={oneDark}
        customStyle={{
            overflowX: 'auto',
            margin: 0,
            scrollbarWidth: 'none',
            fontSize: '14px'
        }}
        wrapLongLines={false}
        >
            {formattedCode}
        </SyntaxHighlighter>
    )
}

export default CodeBlock;