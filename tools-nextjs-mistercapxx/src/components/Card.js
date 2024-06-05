  import Image from 'next/image';
  import mapPinIcon from '@/images/map-pin.png'; 
  import cardStyle from '@/styles/Card.module.css';

  export default function Card({
    data: {
      imageUrl,
      location,
      title,
      startDate,
      endDate,
      googleMapsUrl,
      description,
    },
  }) {
    return (
      <div className={cardStyle.card}>
        <div className={cardStyle.content}>
          <img
            className={cardStyle.picture}
            src={imageUrl}
            alt={`a picture of ${title}`}
          />
          <div className={cardStyle.textBox}>
            <div className={cardStyle.textLocationBox}>
              <Image
                className={cardStyle.textlLocationLogo}
                src={mapPinIcon}
                alt="a map pin"
              />
              <span className={cardStyle.textLocationCountry}>{location}</span>
              <a href={googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className={cardStyle.textTitle}>{title}</h1>
            <p
              className={cardStyle.textTravelDates}
            >{`${startDate} - ${endDate}`}</p>
            <p className={cardStyle.Description}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
