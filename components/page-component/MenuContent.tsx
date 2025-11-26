import CodeBlock from "./CodeBlock";
import FooterMenuContent from "./FooterMenuContent";
import { CopyButton, PromptButton } from "./Buttons";
import { ComponentData } from "@/lib/component-registry";


const MenuContent = ({data} : { data: ComponentData}) => {
  return (
    <div className="flex flex-col p-10 overflow-y-auto max-h-full scrollbar-hide">
      <h1 className="font-sans font-bold mb-3">{data.title}</h1>
      <span className="text-sm mb-10">{data.description}</span>
      <div className="mb-5">
        <h1 className="font-sans font-bold mb-2">Installation</h1>
        <div className="bg-card flex justify-start items-center w-full h-15 px-3 rounded-sm overflow-x-auto scrollbar-hide ">
          <p className="font-mono text-sm whitespace-nowrap">{data.installationCode}</p>
        </div>
      </div>

      {/* Code Block */}
      <div className="flex flex-col mb-5">
        <h1 className="font-sans font-bold mb-5">How to Use</h1>
        <div className="flex gap-5 mb-5">

          <CopyButton data={data.sourceCode} />
          <PromptButton data={data.prompt} />
        </div>

        <div className="flex justify-start items-center bg-card w-full rounded-sm">
          <CodeBlock
            language="tsx"
            code={data.sourceCode}
          />
        </div>
      </div>

      <FooterMenuContent dataCard={data.dependencies} />
    </div>
  );
};

export default MenuContent;
