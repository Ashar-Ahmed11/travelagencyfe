import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AppContext from './context/appContext';
import MetaDecorator from './helmet';
const PostDetail = () => {
  const { slug } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { posts, postStore, fetchPostBySlug } = useContext(AppContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!slug) {
        if (mounted) setLoading(false);
        return;
      }
      const fromList = posts?.find?.(p => p.slug === slug);
      if (fromList) { if (mounted) { setPost(fromList); setLoading(false); } return; }
      if (postStore?.[slug]) { if (mounted) { setPost(postStore[slug]); setLoading(false); } return; }
      const fetched = await fetchPostBySlug(slug);
      if (mounted) { setPost(fetched); setLoading(false); }
    })();
    return () => { mounted = false; };
  }, [slug, posts, postStore, fetchPostBySlug]);

  const fmt = (iso) => {
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(-2);
    let h = d.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12; if (h === 0) h = 12;
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${dd}/${mm}/${yy} ${h}:${min} ${ampm}`;
  };

  if (loading) return <div className="container py-5 text-center">Loading post...</div>;
  if (!post) return <div className="container py-5 text-center text-muted">Post not found.</div>;

  return (
    <div className="container py-4" style={{ maxWidth: 900 }}>
      <MetaDecorator title={post.title} description={post.description.replace(/<[^>]+>/g, '').slice(0, 160)} />
      <button className="btn btn-link mb-3 px-0" onClick={() => history.push('/posts')}>← Back to Posts</button>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-2">{post.title}</h3>
          <small className="text-muted">{fmt(post.date)}</small>
          <div className="mt-3" dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

