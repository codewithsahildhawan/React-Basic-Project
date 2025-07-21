import { useParams } from 'react-router-dom';
import content from '../data/site_content';
import TopBanner from '../components/TopBanner/TopBanner';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = content.services.data.find(s => s.slug === slug);

  if (!service) return <p>Service not found.</p>;

  return (
    <>
        <TopBanner
            title={service.name}
            breadcrumbs={[
                { label: 'Home', path: '/', active: false },
                { label: 'Services', path: '/services', active: false },
                { label: `${service.name}`, active: true }
            ]}
        />
        <section class="services-detail-section section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <div class="services-image-wrap">
                            <img src={service.image} className="services-image img-fluid" alt={service.name} />
                            <img src={service.hoverImage} className="services-image services-image-hover img-fluid" alt={service.name} />
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="services-info px-4 pt-4">
                            <h2 class="mb-4">{service.name}</h2>
                            <div dangerouslySetInnerHTML={{ __html: service.description }} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  );
};

export default ServiceDetail; // ✅ Add this line
