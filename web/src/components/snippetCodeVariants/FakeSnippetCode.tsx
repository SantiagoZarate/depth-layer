export function FakeSnippetCode() {
  return (
    <div className="flex flex-col text-white/50 font-mono">
      <div>
        &lt;<span className="text-emerald-500">DepthDecorator</span>
        <span className="text-blue-300"> lightDirection</span>=
        <span className="text-blue-500">&#123;</span>
        <span className="text-orange-500">''</span>
        <span className="text-blue-500">&#125;</span> /&gt;
      </div>
      <div className="mx-4">
        &lt;<span className="text-blue-500">button</span>&gt;
        <span className="text-white/80">Press me!</span>&lt;/
        <span className="text-blue-500">button</span>&gt;
      </div>
      <div>
        &lt;/<span className="text-emerald-500">DepthDecorator</span>&gt;
      </div>
    </div>
  );
}
