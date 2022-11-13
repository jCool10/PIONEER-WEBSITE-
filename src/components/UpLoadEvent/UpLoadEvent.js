import React, { useMemo, useRef, useState } from 'react';

import JoditEditor from 'jodit-react';

const config = {
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  buttons: 'bold,italic,underline,strikethrough,ul,ol,fontsize,paragraph,file,image,link,left,fullsize,preview',
};

const UpLoadEvent = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const editor = useRef(null);

  const createMarkup = () => {
    return { __html: value };
  };

  return (
    <section>
      <JoditEditor ref={editor} config={config} onChange={(content) => setValue(content)} />
      <button className="p-5 bg-slate-600" onClick={() => {}}>
        Thêm
      </button>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </section>
  );
};

export default UpLoadEvent;
