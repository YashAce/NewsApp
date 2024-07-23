/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : News widget component.
**/

const NewsWidget = ({ articles }) => {
    return (
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-4xl text-white mb-6">Latest News</h1>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white bg-opacity-30 rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-sm">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
               {article.urlToImage !== null &&  <div className="w-full max-w-xl p-2">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-70 object-cover mb-2 rounded-lg shadow-md"
                  />
                </div>}
                <span className="underline">{article.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NewsWidget;
  
