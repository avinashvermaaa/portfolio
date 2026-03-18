import "./TechStack.css";

const TechStack = () => {

    const webdev = [
        "html", "css", "tailwindcss", "javascript", "typescript", "reactjs", "nodejs",
        "expressjs", "nextjs", "restapi", "redux", "angular", "graphql"
    ];

    const language_and_database = [
        "mongodb", "mysql", "postgresql", "sql", "sqlserver",
        "c", "cpp", "csharp", "java", "python", "go", "javascript", "typescript"
    ];

    const dev_tools = [
        "aws", "gcp", "docker", "kubernetes", "redis", "rabbitmq",
        "git", "github", "npm", "postman", "vscode",
    ];

    const renderLogos = (items, path, className) =>
        [...items, ...items].map((imgName, index) => (
            <div key={index} className="logo-wrapper">
                <img
                    src={`./img/${path}/${imgName}.png`}
                    alt={imgName}
                    className={className}
                />
                <span className="logo-tooltip">{imgName}</span>
            </div>
        ));

    return (
        <div id="techstack">
            {/* Banner */}
            <div className="banner">
                <h2 className="text-6xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">My Tech Stacks</h2>
            </div>

            {/* Webdev */}
            <div id="moving-animation">
                <div className="marque-wrapper">
                    <div className="marque-left">
                        {renderLogos(webdev, "webdev", "logo")}
                    </div>
                </div>
            </div>

            {/* Language_and_database */}
            <div id="moving-animation-db-devops">
                <div className="marque-wrapper-db-devops">
                    <div className="marque-right">
                        {renderLogos(language_and_database, "language_and_database", "logo")}
                    </div>
                </div>
            </div>

            {/* Dev_tools */}
            <div id="moving-animation">
                <div className="marque-wrapper">
                    <div className="marque-left">
                        {renderLogos(dev_tools, "dev_tools", "logo")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;