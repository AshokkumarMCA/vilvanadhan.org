import { useMemo } from 'react';
import { Card, SectionTitle } from '../ui';
import { getEvents } from '../../constants/content';
import { getRelativeTime } from '../../utils/lunarCalendar';

export const EventsSection = () => {
  // Get fresh events every time component renders
  const events = useMemo(() => getEvents(), []);

  // Generate Event schema for each event
  const eventSchemas = useMemo(() => {
    return events.map((event) => {
      // Parse the date string (DD/MM/YYYY)
      const [day, month, year] = event.date.split('/').map(Number);
      const eventDate = new Date(year, month - 1, day);
      const eventEndDate = new Date(eventDate);
      eventEndDate.setHours(21, 0, 0, 0); // Event ends at 9 PM

      return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.name,
        alternateName: event.nameTamil,
        description: event.description,
        startDate: eventDate.toISOString(),
        endDate: eventEndDate.toISOString(),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'HinduTemple',
          name: 'Sri Vilvanadha Ishwarar Temple',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kilvillivalam to Thunayambattu Road, Kilvillivalam Village',
            addressLocality: 'Vandavasi',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
            postalCode: '604408',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '12.442529',
            longitude: '79.623604',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Sri Vilvanadha Ishwarar Temple',
          url: 'https://vilvanadhan.org',
        },
        performer: {
          '@type': 'Organization',
          name: 'Temple Priests',
        },
        isAccessibleForFree: true,
      };
    });
  }, [events]);

  return (
    <section id="events" className="py-24 bg-orange-200 text-orange-600">
      <div className="container mx-auto px-4">
        <SectionTitle>Upcoming Temple Events & Pradosha Pooja</SectionTitle>
        <p className="text-center text-orange-700 mb-8 text-sm">
          🌙 Dates are automatically updated based on the lunar calendar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => {
            // Parse the date string (DD/MM/YYYY)
            const [day, month, year] = event.date.split('/').map(Number);
            const eventDate = new Date(year, month - 1, day);
            const relativeTime = getRelativeTime(eventDate);

            return (
              <Card
                key={event.id}
                delay={index * 0.1}
                className="text-orange-900 border-2 border-orange-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">
                    {event.nameTamil}
                    <br />
                    <span className="text-lg font-medium text-orange-700">
                      ({event.name})
                    </span>
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold whitespace-nowrap">
                    {relativeTime}
                  </span>
                </div>

                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">📅</span>
                  <time
                    dateTime={event.date}
                    className="text-orange-600 font-bold text-lg"
                  >
                    {event.date}
                  </time>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-orange-200">
                  <p className="text-sm text-orange-600 font-medium">
                    🕉️ All devotees are welcome
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Event Schema Markup */}
      {eventSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </section>
  );
};
