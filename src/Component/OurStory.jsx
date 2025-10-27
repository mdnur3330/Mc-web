import Container from "./Container";

let years = [2012,2013,2014,2015,2016]

const OurStory = () => {
    return (
        <Container>
            <h2 className='section-title'>our story</h2>
            <div className="flex gap-5 my-6">
  {years.map(year => (
    <div
      key={year}
      className="
        border py-1 px-4 rounded-3xl 
        hover:bg-[var(--color-tertiary)] hover:border-transparent 
        transition-all duration-300 ease-in-out
      "
    >
      <span>{year}</span>
    </div>
  ))}
</div>

        </Container>
    );
};

export default OurStory;