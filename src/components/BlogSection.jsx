import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import './BlogSection.css';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Revolutionizing Fashion: How AR/AI is Changing the Way We Shop',
      author: 'Omayma El Halabi',
      date: 'Jan 20, 2022',
      comments: 25,
      excerpt: 'Discusses the impact of AR/AI technology on the fashion industry and how his platform is leading the way in personalized styling and virtual try-on experiences.',
      image: 'https://images.unsplash.com/photo-1496346129997-edf543bf4f93?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjA4Mjc4MjZ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'The Science Behind Virtual Try-On: How Technology is Redefining Fashion Retail',
      author: 'Ray Kurzweil',
      date: 'May 26, 2024',
      comments: 15,
      excerpt: 'Dive into the technology behind virtual try-on experiences, explaining how algorithms and AR/AI simulations create realistic and personalized styling suggestions.',
      image: 'https://images.unsplash.com/photo-1590126141992-d6a613152c77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5fGVufDB8fHx8MTc2MDg1NzUwOXww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'From Runway to Reality: Bridging the Gap with Virtual Try-On Experiences',
      author: 'StyleWhiz Team',
      date: 'Dec 10, 2022',
      comments: 5,
      excerpt: 'Shows how users can bring high-fashion looks from the runway into their everyday lives through virtual try-on experiences on our platform.',
      image: 'https://images.unsplash.com/photo-1533310266094-8898a03807dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxhdWdtZW50ZWQlMjByZWFsaXR5fGVufDB8fHx8MTc2MDg1NzUwOXww&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">Trending Now: Fashion Meets Technology</h2>
        <p className="section-subtitle">
          Discover the latest insights and innovations in fashion and technology with our curated blog collection. 
          From AR-enhanced designs, explore how these cutting-edge tools are reshaping the industry.
        </p>
        
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item">
                    <Calendar size={16} />
                    {blog.date}
                  </span>
                  <span className="meta-item">
                    <MessageCircle size={16} />
                    {blog.comments} Comments
                  </span>
                </div>
                <h3>{blog.title}</h3>
                <p className="blog-author">Post By {blog.author}</p>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <Button className="read-more-btn">
                  Read More <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;