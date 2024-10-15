interface CardBlogProps {
  title: string;
  description: string;
  img: string;
  data: string;
  link: string;
}

const CardBlog = ({ title, description, img, data, link }: CardBlogProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:shadow-base-300">
      <img alt={title} src={img} className="h-56 w-full object-cover" />

      <div className="bg-base-200 p-4 sm:p-6 h-full">
        <time dateTime="2022-10-10" className="block text-xs text-base-content">
          {" "}
          {data}{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-base-content font-bold">{title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-base-content">{description}</p>

        <a
          href={link}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          Veja mais
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
};

export default CardBlog;
