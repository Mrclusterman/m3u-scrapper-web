"use client";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Download, Link2, FileDown } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
	const [url, setUrl] = useState("");
	const [error, setError] = useState("");
	const [processing, setProcessing] = useState(false);
	const [stats, setStats] = useState<{
		total: number;
		lastProcessed: string;
	} | null>(null);

	const extractAndExport = async () => {
		setProcessing(true);
		setError("");
		setStats(null);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(
					`Error loading page. Status: ${response.status}`
				);
			}

			const html = await response.text();
			const regex = /(?:const|var|let)\s+linksData\s*=\s*({[\s\S]*?});/;
			const match = html.match(regex);

			if (!match) {
				throw new Error("linksData variable not found in the page");
			}

			const linksDataString = match[1];
			const linksData = JSON.parse(linksDataString);

			const cleanedLinks = linksData.links.filter(
				(link: { url: string }) => {
					const urlWithoutPrefix = link.url.replace(
						"acestream://",
						""
					);
					return urlWithoutPrefix.length > 0;
				}
			);

			let m3uContent = "#EXTM3U\n";
			cleanedLinks.forEach((link: { name: string; url: string }) => {
				m3uContent += `#EXTINF:-1 group-title="${link.name}" tvg-id="${link.name}",${link.name}\n`;
				m3uContent += `${link.url}\n`;
			});

			const blob = new Blob([m3uContent], { type: "text/plain" });
			const downloadUrl = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = downloadUrl;
			a.download = "playlist.m3u";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			window.URL.revokeObjectURL(downloadUrl);

			setStats({
				total: cleanedLinks.length,
				lastProcessed: new Date().toLocaleString(),
			});
		} catch (error) {
			setError(
				error instanceof Error
					? error.message
					: "Unknown error while processing URL"
			);
		} finally {
			setProcessing(false);
		}
	};

	return (
		<main className="min-h-screen p-4 bg-gradient-to-b from-blue-600 to-blue-800 md:p-8">
			<div className="max-w-3xl mx-auto space-y-6">
				{/* Header Section */}
				<div className="mb-8 space-y-3 text-center">
					<h1 className="text-4xl font-bold text-white">
						Acestream Links Converter
					</h1>
					<p className="text-xl text-blue-100">
						Easily convert your Acestream links to a compatible M3U
						playlist file
					</p>
				</div>

				{/* Main Converter Card */}
				<Card className="border-0 shadow-2xl">
					<CardHeader className="pb-4">
						<CardTitle className="flex items-center gap-2 text-2xl text-blue-700">
							<Link2 className="text-blue-600" />
							Convert Links
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						{/* URL Input Section */}
						<div className="space-y-2">
							<label className="block text-sm text-gray-600">
								Enter the URL of the page containing Acestream
								links to begin
							</label>
							<div className="flex flex-col gap-3 md:flex-row">
								<Input
									type="url"
									placeholder="https://example.com/acestream-links"
									value={url}
									onChange={(e) => setUrl(e.target.value)}
									className="flex-1"
								/>
								<Button
									onClick={extractAndExport}
									disabled={!url || processing}
									className="text-white transition-colors bg-blue-600 hover:bg-blue-700"
								>
									{processing ? (
										<div className="flex items-center">
											<div className="w-4 h-4 mr-2 border-2 border-white rounded-full animate-spin border-t-transparent" />
											Processing...
										</div>
									) : (
										<div className="flex items-center">
											<Download className="w-4 h-4 mr-2" />
											Download M3U
										</div>
									)}
								</Button>
							</div>
						</div>

						{/* Error Display */}
						{error && (
							<Alert
								variant="destructive"
								className="animate-fadeIn"
							>
								<AlertCircle className="w-4 h-4" />
								<AlertTitle>Error</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}

						{/* Success Stats */}
						{stats && (
							<div className="p-4 border border-green-100 rounded-lg bg-green-50 animate-fadeIn">
								<div className="flex items-center gap-2 mb-2 text-green-700">
									<FileDown className="w-5 h-5" />
									<h3 className="font-semibold">
										Conversion Successful!
									</h3>
								</div>
								<div className="space-y-1 text-sm text-green-600">
									<p>Total links processed: {stats.total}</p>
									<p>Last update: {stats.lastProcessed}</p>
								</div>
							</div>
						)}

						{/* Instructions */}
						<div className="pt-6 mt-6 border-t border-gray-100">
							<h3 className="mb-3 font-semibold text-gray-700">
								How to use?
							</h3>
							<ol className="space-y-2 text-gray-600 list-decimal list-inside">
								<li>
									Enter the URL of the page containing
									Acestream links
								</li>
								<li>
									Click "Download M3U" to convert and download
									the file
								</li>
								<li>
									Import the .m3u file into your favorite
									player
								</li>
							</ol>
						</div>
					</CardContent>
				</Card>

				{/* Footer */}
				<footer className="py-4 text-center text-blue-100">
					<p className="flex items-center justify-center gap-1">
						Created by Mr.Clusterman
					</p>
				</footer>
			</div>
		</main>
	);
}
