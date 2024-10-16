interface RootLayoutProps {
    children: React.ReactNode;
}

const BlogLayout = ({ children }: RootLayoutProps) => {
    return (
        <div>
            <h2>This is the blog layout</h2>
            {children}
        </div>
    );
};

export default BlogLayout;
