import { Container } from 'postcss';

export default function Aboutme() {
  return (
    <div className="w-screen h-screen flex justify-center items-center self-center text-center">
      <div className="md:w-1/2 md:h-1/2 px-5      ">
        <h1 className="w-full h-fit flex justify-start text-xl py-5">
          Who Am I
        </h1>
        <article className="w-full h-full flex text-start  text-xms">
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
          Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45
          BC. This book is a treatise on the theory of ethics, very popular
          during the Renaissance. The first line of Lorem Ipsum&quot;Lorem ipsum
          dolor sit amet.&quot;, comes from a line in section .10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </article>
      </div>
    </div>
  );
}