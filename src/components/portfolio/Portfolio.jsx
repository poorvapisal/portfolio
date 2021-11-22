import "./portfolio.scss"

export default function Portfolio() {
    const data = [
        {
            id: 1,
            name: "Assignment Shell",
            lang: "C",
            desc: "Made a bash-like command line app in C which helps manage and maintain the file structure on your assignment files for several subjects, as well as readily accept updates to the problem structure and also helps zip and submit the required assignment files.",
            Link: "https://github.com/MiryalaNarayanaReddy/AssignmentShellTeam47"
        },
        {
            id: 2,
            name: "Hospital DBMS",
            lang: "Python, MySQL",
            desc: "Hospital-DBMS is a database management system that contains all the details required for a hospital’s official use and the hospital’s employees as the end-users. The database has been created using MySQL and the CLI has been made in Python using the PyMySQL client library to interact with the SQL Database. ",
            Link: "https://github.com/poorvapisal/Hospital-DBMS",
        },
        {
            id: 3,
            name: "Phylogenetic trees",
            lang: "Python",
            desc: "Program to create phylogenetic relationships between the given protein and nucleotide sequences in jupyter notebook, using the numpy, pandas and biopython libraries. The relationships have been generated using the UPGMA method.",
            Link: "https://github.com/poorvapisal/UPGMA",
        },
        {
            id: 4,
            name: "Contact Book",
            lang: "Shell script (Bash)",
            desc: "This is a basic contact book made using the bash shell script. It takes care of the basic CRUD operations for the maintenance of a contact book in a csv format. ",
            Link: "https://github.com/poorvapisal/Contactbook",
        },

    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="container">
                {data.map(d => (

                    <div className="card">
                        <div className="top">
                            <h3>{d.name}</h3>
                            <h4>{d.lang}</h4>
                        </div>
                        <div className="center">{d.desc} </div>
                        <div className="bottom">
                        <h4><a href={d.Link} className="link">Know more</a></h4>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

