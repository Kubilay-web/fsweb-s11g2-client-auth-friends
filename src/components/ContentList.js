import { useState } from "react";

export default function ContentList() {
  const [content, setContent] = useState([]);

  return (
    <div>
      <h2 className="text-xl font-bold p-2">Gizli Kullanıcı Listesi</h2>
      <p>Burası aslında gizli bilgi.</p>

      <div className="py-6">
        {content.map((item) => (
          <div className="p-4 bg-white shadow mb-4" key={item.id}>
            <div className="p-4 text-left">
              <h3 className="font-bold text-lg">{item.id}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
