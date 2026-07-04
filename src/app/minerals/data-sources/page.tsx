export const metadata = { title: 'Data Sources | Mineral Prices Info Centre' };

export default function DataSourcesPage() {
  return (
    <>
      <div className="mb-8">
        <p className="text-terminal-green/60 font-mono text-xs uppercase tracking-widest mb-2">// Transparency</p>
        <h1 className="text-4xl font-mono font-bold text-off-white mb-3">Data Sources</h1>
        <p className="text-light-gray max-w-2xl">
          All data used in the Mineral Prices Info Centre, their update frequencies, and coverage details.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl">
        {[
          {
            name: 'Metals-API',
            url: 'metalpriceapi.com',
            coverage: 'Gold, Silver, Platinum, Palladium, Rhodium — live spot prices',
            refresh: 'Every 15 minutes',
            type: 'Live API',
            notes: 'Primary source for all precious metals pricing. Falls back to static seed on API failure.',
          },
          {
            name: 'Alpha Vantage',
            url: 'alphavantage.co',
            coverage: 'Copper, Aluminium, Zinc, Nickel, Lead — commodity futures prices',
            refresh: 'Every 1 hour',
            type: 'Live API',
            notes: 'Base metals pricing via commodity futures endpoints. Cached for 1 hour.',
          },
          {
            name: 'ExchangeRate-API',
            url: 'exchangerate-api.com',
            coverage: 'USD, EUR, GBP, AUD, CAD, JPY, CNY exchange rates',
            refresh: 'Every 1 hour',
            type: 'Live API',
            notes: 'Currency conversion rates updated hourly. Falls back to hardcoded rates if unavailable.',
          },
          {
            name: 'World Bank Commodities API',
            url: 'worldbank.org',
            coverage: 'Historical price series for 80+ commodities (monthly/annual)',
            refresh: 'Daily',
            type: 'Live API (no key required)',
            notes: 'Used for 1-year and 5-year historical chart data. Free and unrestricted.',
          },
          {
            name: 'USGS Mineral Resources',
            url: 'usgs.gov/minerals',
            coverage: 'Production statistics, reserves, country-level supply data',
            refresh: 'Annual',
            type: 'Static / Manual',
            notes: 'United States Geological Survey publishes the definitive annual mineral statistics. Supply chain data sourced from USGS Mineral Commodity Summaries.',
          },
          {
            name: 'Static Seed Data',
            url: null,
            coverage: 'All 20 minerals — price snapshot, 52w range, 1Y daily history',
            refresh: 'Updated manually',
            type: 'Seed / Fallback',
            notes: 'Comprehensive static dataset used as fallback when live APIs are unavailable or rate-limited. All prices are point-in-time snapshots with clear timestamps.',
          },
        ].map(s => (
          <div key={s.name} className="bg-charcoal-gray border border-gray-700/60 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="font-mono font-bold text-off-white">{s.name}</h3>
                {s.url && <p className="text-terminal-green/50 font-mono text-xs">{s.url}</p>}
              </div>
              <span className={`text-xs font-mono px-2 py-0.5 rounded border shrink-0 ${
                s.type === 'Live API' || s.type === 'Live API (no key required)'
                  ? 'bg-terminal-green/10 text-terminal-green border-terminal-green/30'
                  : s.type === 'Static / Manual'
                  ? 'bg-gray-700/30 text-gray-400 border-gray-600/30'
                  : 'bg-steel-blue/10 text-steel-blue border-steel-blue/30'
              }`}>
                {s.type}
              </span>
            </div>
            <p className="text-light-gray text-sm mb-2">{s.coverage}</p>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-gray-600">Refresh: <span className="text-gray-400">{s.refresh}</span></span>
            </div>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed">{s.notes}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-charcoal-gray border border-terminal-green/20 rounded-md p-5 max-w-3xl">
        <p className="text-terminal-green/60 uppercase tracking-widest text-[10px] font-mono mb-2">// Disclaimer</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          Prices displayed are indicative and sourced from the providers listed above. They may differ from exchange-traded prices and should not be used as the sole basis for financial decisions. Historical data is provided for informational purposes. Wrenfield Consulting makes no representations as to the accuracy or completeness of the information displayed.
        </p>
      </div>
    </>
  );
}
