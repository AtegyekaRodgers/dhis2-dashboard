export const indicatorMap = {
	totalDeaths: "vU8Ofttev65",
	femaleDeaths: "JDygTkWCxQU",
	maleDeaths: "CFMGxtTBf6m",
	totalBirths: "Z64hUZUifEF",
	femaleBirths: "zkMVFHEPvzC",
	maleBirths: "ihAAgZ8OjGE",
	totalCertified: "ihAAgZ8OjGE",
};

// just for reference

interface IndicatorInterface {
	id: string;
	displayName: string;
}
const programIndicators: IndicatorInterface[] = [
	{
		id: "T6TTjdahYxL",
		displayName: "Number Medically Certified Deaths Notified",
	},
	{
		id: "JDygTkWCxQU",
		displayName: "Number of Female Deaths Notified",
	},
	{
		id: "zkMVFHEPvzC",
		displayName: "Number of Female Live Births Notified",
	},
	{
		id: "ihAAgZ8OjGE",
		displayName: "Number of Male Live Births Notified",
	},
	{
		id: "CFMGxtTBf6m",
		displayName: "Number of male Deaths Notified",
	},
	{
		id: "Z64hUZUifEF",
		displayName: "Total Live Births Notified - mvrs",
	},
	{
		id: "vU8Ofttev65",
		displayName: "Total Number of  Deaths Notified",
	},
];
